'use strict';

const DomElement = function(selector,height,width,bg,fontSize){

      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
    

};

   let div,pg;

DomElement.prototype.creatSelectorElement = function(selector,height,width,bg,fontSize){
    
   
    if(selector.substr(0, 1) === '.'){
        div = document.createElement('div');
     
      div.classList.add('selector');
    // } else if(selector.substr(0, 1) === '#'){
    //   pg = document.createElement('p');
    //     pg.classList.add('selector');
    // }
    

div.style.cssText = `
height : ${height}px;
width : ${width}px;
fontSize : ${fontSize}px;
background : ${bg};

`;

// pg.style.cssText = `
// height : ${this.height}px;
// width : ${this.width}px;
// background : ${this.bg};
// fontSize : ${this.fontSize}px;
// `;
document.writeln(div.innerHTML = 'Любой текст 1');


//pg.innerHTML = 'Любой текст 2';
}
  
};
let domElement = new DomElement('.money',200, 30, 'red' ,10);
domElement.creatSelectorElement(domElement.selector,domElement.height,domElement.width,domElement.bg,domElement.fontSize);

console.log(div);
