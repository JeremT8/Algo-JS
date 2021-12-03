class List{
	constructor(strategy, data = []){
	    this.data = data;
	    this.strategy = strategy;
	}
    
	add(value){
	    this.data.push(value);
	    return this;
	}
    
	setStrategy(strategy){
	    this.strategy = strategy;
	    return this;
	}
    
	render(){
	    this.strategy.render(this.data);
	}
    
    }
    
    
    class MarkDownStrategy{
    
	render(data){
	    let md = "";
	    for(let item of data){
		md += `  - ${item} \n`;
	    }
	    console.log(md);
	}
    
    }
    
    
    class PlainTextStrategy{
    
	render(data){
	    console.log(data.join(", "));
	}
    }

    class HtmlStrategy{
	render(data){
	  console.log("<ul>" + data.reduce((p,s)=>{return p + `<li>${s}</li>`}, '') + '</ul>');
	}
      }
    
    
    
    const l = new List(new MarkDownStrategy(), [2, 8]);
    l.add(6).add(7).add(32).setStrategy(new PlainTextStrategy());
    
    l.render();