import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmailDataService {

  public data: any = [
  {
    "id": 1,
    "first_name": "Wes",
    "last_name": "Causer",
    "email": "wcauser0@so-net.ne.jp",
    "avatar": "https://robohash.org/corporisvoluptatemexplicabo.png?size=50x50&set=set3",
    "date": "9/16/2016",
    "subject": "MCH",
    "body": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
  }, {
    "id": 2,
    "first_name": "Jeffrey",
    "last_name": "Brydson",
    "email": "jbrydson1@domainmarket.com",
    "avatar": "https://robohash.org/omnisvoluptatemest.png?size=50x50&set=set3",
    "date": "8/15/2016",
      "tags": "Design",
    "subject": "OLTP",
    "body": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
  }, {
    "id": 3,
      "first_name": "Gray",
      "last_name": "Kehoe",
      "email": "gkehoe2@soup.io",
      "avatar": "https://robohash.org/idteneturdignissimos.bmp?size=50x50&set=set3",
      "date": "5/17/2017",
      "subject": "UFS",
      "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  }, {
    "id": 4,
      "first_name": "Tomaso",
      "last_name": "Crow",
      "email": "tcrow3@myspace.com",
      "avatar": "https://robohash.org/repellatadipiscimaxime.png?size=50x50&set=set3",
      "date": "3/23/2016",
      "subject": "TNCC",
      "body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
  }, {
    "id": 5,
      "first_name": "Bertram",
      "last_name": "Jarad",
      "email": "bjarad4@theglobeandmail.com",
      "avatar": "https://robohash.org/sunthicrerum.bmp?size=50x50&set=set3",
      "date": "1/13/2016",
      "tags" : "Code",
      "subject": "Product Life Cycle",
      "body": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
  }, {
    "id": 6,
      "first_name": "Dante",
      "last_name": "Scotchforth",
      "email": "dscotchforth5@psu.edu",
      "avatar": "https://robohash.org/exetperferendis.bmp?size=50x50&set=set3",
      "date": "6/6/2016",
      "subject": "Gym",
      "body": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
  }, {
    "id": 7,
      "first_name": "Claudio",
      "last_name": "Crowdy",
      "email": "ccrowdy6@illinois.edu",
      "avatar": "https://robohash.org/occaecatiadipisciut.png?size=50x50&set=set3",
      "date": "5/5/2016",
      "subject": "WGA",
      "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
  }, {
    "id": 8,
      "first_name": "Darbie",
      "last_name": "Levington",
      "email": "dlevington7@biglobe.ne.jp",
      "avatar": "https://robohash.org/nonutofficia.bmp?size=50x50&set=set3",
      "date": "5/28/2016",
      "subject": "Multithreading",
      "body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
  }, {
    "id": 9,
      "first_name": "Tansy",
      "last_name": "Dorow",
      "email": "tdorow8@tmall.com",
      "avatar": "https://robohash.org/inventoretotamrerum.jpg?size=50x50&set=set3",
      "date": "8/15/2016",
      "subject": "Rhetorical Analysis",
      "body": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  }, {
    "id": 10,
      "first_name": "Jeri",
      "last_name": "Cubbit",
      "email": "jcubbit9@lycos.com",
      "avatar": "https://robohash.org/voluptatemquisquamdebitis.bmp?size=50x50&set=set3",
      "date": "9/22/2016",
      "subject": "WFA",
      "body": "In congue. Etiam justo. Etiam pretium iaculis justo."
  }
  ];

  constructor() { }

  public getData(): any{
    return this.data;
  }
}
