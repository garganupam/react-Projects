function customRender(reactElement,container){
    /*

    //Suppose we have many attributes so it wont be easy to assign all the attributes by this method

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);
    */


    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer)
