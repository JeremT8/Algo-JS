class HtmlElement{
    constructor(tagName, textContent = "", autoClosed = false){
        this.tagName = tagName;
        this.textContent = textContent;
        this.autoClosed = autoClosed;
        this.attributes = {};
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
        let html = `<${this.tagName} ${this.getAttributesAsString()}>`;
        if(! this.autoClosed){
            html += this.textContent;
            html+= `</${this.tagName}>`;
        }
        
        return html;
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

const p = new HtmlElement("p", "Bonjour");
p   .setAttribute("class", "active")
    .setAttribute("lang", "fr")
    .setAttribute("id", "intro");
console.log(p.render());

const img = new ImageElement("photo.jpg", "ma photo");
console.log(img);
console.log(img.render());