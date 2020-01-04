


let CusomerList;

if(localStorage.getItem("CustomerData")==null)
 {
    CusomerList=[];
 }
 else{
   CusomerList= JSON.parse( localStorage.getItem("CustomerData"));
   DisplayCustomer();
   
 }


function addCustomer(){

  let customerFName=  document.getElementById("fname").value;
  let customerSName=  document.getElementById("sname").value;
  let customerSalary=  document.getElementById("salary").value;
  let customerJob=  document.getElementById("job").value;
 let CustomerSegmentation =document.getElementById("seg").value;

  

var Customer ={
   fname:customerFName,
   sname:customerSName,
   salary:customerSalary,
   job:customerJob,
  seg: CustomerSegmentation

}

CusomerList.push(Customer);
localStorage.setItem("CustomerData", JSON.stringify(CusomerList) );
DisplayCustomer();
}


function DisplayCustomer(){
 
  let temp=``;
  //console.log(CusomerList.length);

  for (let i = 0; i <CusomerList.length; i++) {
    //console.log(CusomerList[i].fname +"   i= "+i)
    temp+=` 
    <div class="col-md-4">
    <div class="cust-info">
    <img src="images/team-bw-1.jpg" class="img-fluid"   />
    <h4> ${CusomerList[i].fname} ${ CusomerList[i].sname } <span  class="badge badge-warning ml-5 "> ${CusomerList[i].seg}</span> </h4>
    <p>
       ${CusomerList[i].job}
    </p>
    <h5 class="salary p-3"> ${CusomerList[i].salary} </h5>
    <button onclick="deleteCustomer(${i})" type="button" name="delete" id=" delete" class="btn btn-danger"> delete </button>
    <button onclick="updateCustomer(${i})" type="button" name="delete" id=" delete" class="btn btn-success"> update </button>
    </div>
</div>
       
    `; 
  } 
  document.getElementById("custRow").innerHTML=temp;


}

function Search(e){
  let temp=``;
  for (let i = 0; i < CusomerList.length; i++) {
    if(CusomerList[i].fname.toUpperCase().includes(e.value.toUpperCase()))
      {
        temp+=` 
        <div class="col-md-4">
        <div class="cust-info">
        <img src="images/team-bw-1.jpg" class="img-fluid"   />
        <h4> ${CusomerList[i].fname} ${ CusomerList[i].sname } <span  class="badge badge-warning ml-5 "> ${CusomerList[i].seg}</span> </h4>
        <p>
           ${CusomerList[i].job}
        </p>
        <h5 class="salary p-3"> ${CusomerList[i].salary} </h5>
       </div>
       </div>
        
        `; 
       
       
      }
     
  }

  document.getElementById("custRow").innerHTML=temp;
}

function deleteCustomer(i){
CusomerList.splice(i,1);
localStorage.setItem("CustomerData", JSON.stringify(CusomerList) );
DisplayCustomer();
}
function updateCustomer(x){
  
  let customerFName=  document.getElementById("fname").value;
  let customerSName=  document.getElementById("sname").value;
  let customerSalary=  document.getElementById("salary").value;
  let customerJob=  document.getElementById("job").value;
 let CustomerSegmentation =document.getElementById("seg").value;

  

var Customer ={
   fname:customerFName,
   sname:customerSName,
   salary:customerSalary,
   job:customerJob,
  seg: CustomerSegmentation

}
CusomerList[x]=Customer;

localStorage.setItem("CustomerData", JSON.stringify(CusomerList) );
DisplayCustomer();
  
  
  }
  function addSCustomer(x){
    
     
    }
    
