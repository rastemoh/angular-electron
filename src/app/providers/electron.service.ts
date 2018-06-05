import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as sequelize from 'sequelize';
import { AppConfig } from '../../environments/environment';
@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;
  Sequelize: typeof sequelize;
  dbConn: sequelize.Sequelize;
  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
      this.Sequelize = window.require('sequelize');
      const dbConf = AppConfig.database;
      this.dbConn = new this.Sequelize(`mysql://${dbConf.username}:${dbConf.password}@${dbConf.host}:${dbConf.port}/${dbConf.name}`);
      this.dbConn.authenticate().then(() => {
        console.log('Connection successfully made.');
      }).catch(err => {
        console.error('Error connecting to database', err);
      });
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

}
