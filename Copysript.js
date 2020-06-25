'use strict';

const DomElement = function(selector,height,width,bg,fontSize){

      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
    

};

                        DomElement.prototype.ride = function(selector,height,width,bg,fontSize){
                            console.log(`Эта функция прототипа принимает параметр - ${selector}`);
 };
       let domElement = new DomElement(66);

                               domElement.ride(domElement.selector);
                               console.log(domElement);


DomElement.prototype.creatSelectorElement = function(selector,height,width,bg,fontSize){
    let div;
   
     if(selector.substr(0, 1) === '.'){
         div = document.createElement('div');
      
       div.classList.add('selector');
     } else if('selector'.substr(0, 1) === '#'){
         let pg = document.createElement('p');
         pg.classList.add('selector');
     }
     

 div.style.cssText = `
 height : ${height}px;
 width : ${width}px;
 background : ${bg};
 fontSize : ${fontSize}px;
 `;

 this.pg.style.cssText = `
 height : ${this.height}px;
 width : ${this.width}px;
 background : ${this.bg};
 fontSize : ${this.fontSize}px;
 `;
 div.innerHTML = 'Любой текст 1';
 this.pg.innerHTML = 'Любой текст 2';
};
