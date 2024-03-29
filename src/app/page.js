import React from 'react';

const page = () => {
  return (
    <div>
      <h1>Postman: <br/>

    "firstName":"simon",<br/>
    "lastName":"timo",<br/>
    "roll":3,<br/>
    "age":18,<br/>
    "grade":"B",<br/>
    "cours":"math"<br/>
    
<h4>
    link: singlereg:http://localhost:3000/api/singleReg <br/>
    link: manyreg:http://localhost:3000/api/manyReg <br/>
    link: update:http://localhost:3000/api/update?id=3 <br/>
    link: delete:http://localhost:3000/api/delete?id=3 <br/>
    link: singleData:http://localhost:3000/api/singleData <br/>
    link: allData:http://localhost:3000/api/allData <br/>
</h4>

</h1>
    </div>
  );
};

export default page;