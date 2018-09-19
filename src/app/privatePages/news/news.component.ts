import { Component, OnInit } from '@angular/core';
import { NavigationStateService } from './../../services/navigation-state.service';
import { BaseAuthService } from './../../services/base-auth.service';

import { DisplayOptions } from './../../models/displayOptions';
import CryptoNewsApi from 'crypto-news-api';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    displayOptions: DisplayOptions;
    articles: any = [];
    offer: any = null;

    constructor(private baseAuthService: BaseAuthService,
        private navigationStateService: NavigationStateService) { }

    ngOnInit() {
        this.navigationStateService.changeState('News', 'news');

        this.displayOptions = this.baseAuthService.allData.displayOptions;

        this.getTopTargetedOffer();

        this.getRelatedNews();

    }

    getTopTargetedOffer() {
        this.baseAuthService.widget
        this.baseAuthService.widget.getAllOffers().then(data => {
            //For now lets get the first one.
            if (data.length > 0)
                this.offer = data[0];
            console.log(data);
        });
    }

    getRelatedNews() {
        // Connect to the CryptoControl API
        const Api = new CryptoNewsApi('e5c642cc982a29a78dfe0b3ddf166f82');

        if (this.displayOptions.general || this.displayOptions.mining || this.displayOptions.ICO) {
            Api.getTopNewsByCategory().then(articles => {
                if (this.displayOptions.general)
                    this.articles = this.articles.concat(articles.general);
                if (this.displayOptions.mining)
                    this.articles = this.articles.concat(articles.mining);
                if (this.displayOptions.ICO)
                    this.articles = this.articles.concat(articles.ico);
                console.log(articles);
            }).catch(function (error) { console.log(error) })
        }
        if (this.displayOptions.bitcoin)
            Api.getTopNewsByCoin('bitcoin').then(articles => { this.articles = this.articles.concat(articles); console.log(articles); }).catch(function (error) { console.log(error) })
        if (this.displayOptions.ethereum)
            Api.getTopNewsByCoin('ethereum').then(articles => { this.articles = this.articles.concat(articles); console.log(articles); }).catch(function (error) { console.log(error) })
        if (this.displayOptions.bitclave)
            Api.getTopNewsByCoin('bitclave').then(articles => { this.articles = this.articles.concat(articles); console.log(articles); }).catch(function (error) { console.log(error) })
    }

}
