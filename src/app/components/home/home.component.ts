import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { Model } from 'sequelize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private el: ElectronService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.el.isElectron()) {
      const Document = this.el.dbConn.model('document');
      Document.findAll().then(loadedDocs => {
        const docs = loadedDocs as Model<any, any>[];
        console.log(docs);
        // this.posts = loadedPosts as any[];
        this.cdr.detectChanges();
      });
    }
  }

}
