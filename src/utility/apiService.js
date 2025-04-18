
import axios from "axios";
//  ******************** Base URL ***********************
let baseUrl = "http://localhost:2023/api/";

export const userLogin = async (body) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}user/login`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};
export const getUser = async () => {
  let token = localStorage.getItem("token");
  // let token;
  // if(getToken){
  //   token=JSON.parse(getToken)
  // }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
  };
  const response = await fetch(`${baseUrl}user/profile`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};
export const studentcreate = async (body) => {
  let token = localStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}user/reg`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getAlluser = async () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseUrl}user/getalluser`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};



export const getAllassigment = async () => {   
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseUrl}assign/getallassign`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const CreateAssignment = async (body) => {
  console.log(body);
  
  let token = localStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "token":token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}assign/createassign`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const studentAss = async () => {
  let token = localStorage.getItem("token");
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
  };
  const response = await fetch(`${baseUrl}stdassign/stdviewallassign`,requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};
export const writeAnswer = async (body,id) => {
  console.log(body);
  let token = localStorage.getItem("token");
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}stdassign/attendassign/${id}`,requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const CheckAnswer = async (id) => {
  let token = localStorage.getItem("token");
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
  };
  const response = await fetch(`${baseUrl}stdassign/stdviewsingleassignans/${id}`,requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};
export const Pdf = async (view) => {
  // let token = localStorage.getItem("token");
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-Type': 'multipart/form-data'
      
    },
    responseType : "blob"
  };
 await fetch(`${baseUrl}assign/get?view=${view}`,requestOptions);
  // if (!response.ok) {
  //   let data = await response.json();
  //   return { data: data, ok: false };
  // }
  // let data = await response?.json();
  // return { data: data, ok: true };
};
export const getTicketsPdf = async (selectedClassType,selectSubject,selectedStdId,AssId) => {
  
  if(AssId !== undefined && selectSubject !== undefined  ) {
    //  console.log(AssId,selectSubject,"gi");
     return(
       axios.get(`${baseUrl}assign/get?subject=${selectSubject}&assignmentid=${AssId}`, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'arraybuffer'
      })
       )
   }
if(selectedClassType !== undefined && selectSubject !== undefined && AssId !== undefined ) {
     console.log(AssId,selectSubject,selectedClassType,"gi");
     return(
       axios.get(`${baseUrl}assign/get?class=${selectedClassType}&subject=${selectSubject}&assignmentid=${AssId}`, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'arraybuffer'
      })
       )
   }
  if(selectedClassType !== undefined )
  { 
   return( 
    axios.get(`${baseUrl}assign/get?class=${selectedClassType}`, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    responseType: 'arraybuffer'
  })
  )
}
if(selectedStdId !== undefined ) {
  console.log(selectedStdId);
  return(
    axios.get(`${baseUrl}assign/get?stdid=${selectedStdId}`, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'arraybuffer'
    })
    )
}
  if(selectSubject !== undefined )
  { 
   return( 
    axios.get(`${baseUrl}assign/get?subject=${selectSubject}`, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    responseType: 'arraybuffer'
  })
  )
}
if(selectedClassType === undefined && selectSubject === undefined ) {
  return( 
  axios.get(`${baseUrl}assign/get`, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    responseType: 'arraybuffer'
  })
)
}
};
export const getviewPdf = async (selectedClassType,selectSubject,selectedStdId,AssId) => {

  if(AssId !== undefined && selectSubject !== undefined  ) {
        //  console.log(AssId,selectSubject,"gi");
         return(
           axios.get(`${baseUrl}assign/get?subject=${selectSubject}&assignmentid=${AssId}&view=true`)
           )
       }
  if(selectedClassType !== undefined && selectSubject !== undefined && AssId !== undefined ) {
         console.log(AssId,selectSubject,selectedClassType,"gi");
         return(
           axios.get(`${baseUrl}assign/get?class=${selectedClassType}&subject=${selectSubject}&assignmentid=${AssId}&view=true`)
           )
       }
  if(selectedClassType !== undefined )
  { 
    // console.log(selectedClassType);
    return(
    axios.get(`${baseUrl}assign/get?view=true&class=${selectedClassType}`)
    )
  }
   if(selectSubject !== undefined ) {
          // console.log(selectSubject);
          return(
            axios.get(`${baseUrl}assign/get?view=true&subject=${selectSubject}`)
            )
        }
   if(selectedStdId !== undefined ) {
          // console.log(selectSubject);
          return(
            axios.get(`${baseUrl}assign/get?view=true&stdid=${selectedStdId}`)
            )
        }
   if(AssId !== undefined ) {
          // console.log(selectSubject);
          return(
            axios.get(`${baseUrl}assign/get?view=true&assignmentid=${AssId}`)
            )
        }
      if(selectedClassType === undefined && selectSubject === undefined ) {
        return( 
        axios.get(`${baseUrl}assign/get?view=true`)
      )
      }
  }


  export const studentviewdata = async (id) => {
    console.log(id);
      return(
      axios.get(`${baseUrl}assign/get?view=true&stdid=${id}`)
      )
  }
 