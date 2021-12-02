class HtmlElement{
    constructor(tagName, textContent = "", autoClosed = false){
        this.tagName = tagName;
        this.textContent = textContent;
        this.autoClosed = autoClosed;
        this.attributes = {};
        this.children = [];
    }

    addChild(element){
        if(this.autoClosed){
            throw "Pas d'enfants sur une balise auto fermée";
        } 
        this.children.push(element);
        return this;  
    }

    setAttributes(attrList){
        this.attributes = attrList;
        return this;
    }

    setAttribute(key, value){
        this.attributes[key] = value;
        return this;
    }

    getAttributesAsString(){
        let attr = [];
        for(let key in this.attributes){
            attr.push(`${key}="${this.attributes[key]}"`);
        }
        return attr.join(" ");
    }

    render(){
        let html = `<${this.tagName} ${this.getAttributesAsString()}>\n`;
        if(! this.autoClosed){
            html += this.textContent + '\n';

            // Ajout des enfants
            for(let item of this.children){
                html += item.render();
            }

            html+= `</${this.tagName}>\n`;
        }
        
        return html;
    }

    toString(){
        return this.render();
    }
}

class ImageElement extends HtmlElement{
    constructor(source, altText){
        super("img", "", true);
        this.setAttributes({
            src: source,
            alt: altText
        });
    }
}

const div = new HtmlElement("div")

const p = new HtmlElement("p", "Bonjour");
p   .setAttribute("class", "active")
    .setAttribute("lang", "fr")
    .setAttribute("id", "intro");

const img1 = new ImageElement("photo.jpg", "ma photo");
const img2 = new ImageElement("photo.jpg", "ma photo");

div.addChild(p);
p.addChild(img1).addChild(img2);

console.log(div.render());
