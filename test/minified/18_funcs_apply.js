function product(name,value){this.name=name;if(value>1000){this.value=999}else this.value=value}
function prod_dept(name,value,dept){this.dept=dept;product.apply(this,arguments)};prod_dept.prototype=new product();cheese=new prod_dept("feta",5,"food");car=new prod_dept("honda",5000,"auto");cheese.value==5&&car.value==999
