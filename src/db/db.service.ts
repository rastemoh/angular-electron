import { Injectable } from '@angular/core';
import { ElectronService } from '../app/providers/electron.service';

@Injectable()
export class DBService {
    constructor(private el: ElectronService) {}
    init() {
        const Sequelize = this.el.Sequelize;
        // Defining models
        const Document = this.el.dbConn.define('document', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING
            },
            no: Sequelize.INTEGER,
            isCurrent: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            isClosed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            closedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
        const Receipt = this.el.dbConn.define('receipt', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            no : {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            rowsCount: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            isPrioritised: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            date: {
                type: Sequelize.DATEONLY
            },
            from: {
                type: Sequelize.STRING
            }
        });
        const Record = this.el.dbConn.define('record', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            productName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            quantity: {
                type: Sequelize.INTEGER
            }
        });
        const Unit = this.el.dbConn.define('unit', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
        const ShopCode = this.el.dbConn.define('shopCode', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });

        // setting up models relations
        Receipt.belongsTo(ShopCode);
        ShopCode.hasMany(Receipt);
        Record.belongsTo(Unit);
        Document.hasMany(Receipt);
        Receipt.belongsTo(Document);
        Receipt.hasMany(Record);
        Record.belongsTo(Receipt);

        // syncing the whole database schema
        this.el.dbConn.sync();
    }

    loadDocuments() {

    }

    createNewDocument(title: string = '') {

    }

    closeDocument() {

    }

    createNewReceipt(countOfRows: number, shopCodeId: number, date: Date, from: string, isPrioritised: boolean = false) {

    }

    loadRecordsOfDocument(documentId: number) {

    }

    loadShopCodes() {

    }

    createNewShopCode(title: string) {

    }

    loadUnits() {

    }

    createNewUnit(title: string) {

    }
}
