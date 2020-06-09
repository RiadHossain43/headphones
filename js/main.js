let eleID = (id) => {
    return document.getElementById(id);
}
let eleCls = (cls) => {
    return document.getElementsByClassName(cls);
}
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
const header = eleID('header');
const intro = eleCls('intro')

let navAnim = () => {
    let headbound = header.getBoundingClientRect()
    let introbound = intro[0].getBoundingClientRect()
    if (introbound.top < -220){
        if(window.innerWidth>768)
            set_style(header, { backgroundColor: 'black', boxShadow: '0 0 0 black' , height:'14vh'})
        else 
            set_style(header, { backgroundColor: 'black', boxShadow: '0 0 0 black' , height:'10vh'})
    } 
    else{
        if(window.innerWidth>768)
            set_style(header, { backgroundColor: 'transparent', boxShadow: '0 6px 20px black', height:'20vh' })
        else 
            set_style(header, { backgroundColor: 'transparent', boxShadow: '0 6px 20px black', height:'15vh' })

    }

}
window.addEventListener('scroll', () => {
    navAnim()

}) 