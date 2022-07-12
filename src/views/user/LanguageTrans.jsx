import axios from 'axios';
import React,{useState} from 'react';

const LanguageTrans = () => {

    const[options,setOptions]=useState([])
    const [to,setTo]=useState("en");
    const [from,setFrom]=useState("en");
    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");
    const translate=()=>{
      const params=new URLSearchParams();
      params.append('q',input);
      params.append('source',from);
      params.append('target',to);
      params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      
  
     
  
  
      axios.post('https://libretranslate.de/translate',params,{
        headers:{'accept':'application/json',
        'Content-Type':'application/x-www-form-urlencoded'},
      }).then(res=>{
        console.log(res.data)
        setOutput(res.data.translatedText)
      })
    };
    React.useEffect(() => {
      axios.get("https://libretranslate.de/languages",{headers:{'accept':'application/json'}}).then(res=>{
        console.log(res)
        setOptions(res.data)
      })
  
    })
    return (
       

<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
<div className="rounded-t bg-white mb-0 px-6 py-6">
  <div className="text-center flex justify-between">
    {/* <h6 className="text-blueGray-700 text-xl font-bold capitalize">{curUser.user ? curUser.user.username:''} Todo List</h6> */}
    <button
      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      type="button"
    >
      Settings
    </button>
  </div>
</div>
<div className="flex-auto px-4 lg:px-10 py-10 pt-0">

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Add New Todo
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                From :({from})
              </label>
              
            <select onChange={e=>setFrom(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-sm rounded-sm mb-2 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
            </select>

              <textarea
                onInput={(e)=>setInput(e.target.value)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              
              ></textarea>
            
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                To {to}
              </label>
              <select onChange={e=>setTo(e.target.value)} class="bg-gray-50 border border-gray-300 text-sm rounded-sm mb-2 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
            </select>
              <textarea
                
                value={output}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
              
              </textarea>
            </div>
          </div>
        </div>
        <button
       onClick={e=>translate()}
          className="ml-4 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Translate Language
        </button>

     
</div>
</div>
    );
};

export default LanguageTrans;