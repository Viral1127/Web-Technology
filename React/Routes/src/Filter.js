import React, {useState} from "react";
import StudentCard from "./StudentCard";

var stu = [
    [
      "/stu/vc.jpg",
      "Viral Chauhan",
      "B.Tech",
      "Darshan University",
      "VC"
    ],
    [
      "/stu/jenish.jpg",
      "jenish Detroja",
      "B.Tech",
      "Darshan University",
      "CHHOTU"
    ],
    [
      "/stu/jenil.jpg",
      "Jenil Sutariya",
      "B.Tech",
      "Darshan University",
      "JENTO"
    ],
  
    [
      "/stu/pari.jpg",
      "Parita Jani",
      "B.Tech",
      "Darshan University",
      "TAKII"
    ],
    [
      "/stu/tisha.jpg",
      "Tisha Kalola",
      "B.Tech",
      "Darshan University",
      "BIMLII"
    ],
    [
      "/stu/janvi.jpg",
      "Janvi Kalola",
      "B.Tech",
      "Darshan University",
      "JANVI"
    ],
    [
      "/stu/javia.jpg",
      "Javia Bhargav",
      "B.Tech",
      "Darshan University",
      "JAVIYO"
    ],
    [
      "/stu/kirti.jpg",
      "Kirti Timbadiya",
      "B.Tech",
      "Darshan University",
      "MAMLATDAR"
    ],
    [
      "/stu/prem.jpg",
      "Prem Khunt",
      "B.Tech",
      "Darshan University",
      "PREM"
    ],
    [
      "/stu/tako.jpg",
      "Nirav Vekariya",
      "B.Tech",
      "Darshan University",
      "TAKO"
    ],
    [
      "/stu/vivek.jpg",
      "Vivek Bhoraniya",
      "B.Tech",
      "Darshan University",
      "BHORU"
    ],
    [
      "/stu/shoru.jpg",
      "Shourya Vachhani",
      "B.Tech",
      "Darshan University",
      "SHORU"
    ],
    [
      "/stu/gando.jpg",
      "Vihan Yagnik",
      "B.Tech",
      "Darshan University",
      "GANDO"
    ],
    [
      "/stu/ladu.jpg",
      "Dhyey Ladani",
      "B.Tech",
      "Darshan University",
      "LADU"
    ],
    [
      "/stu/abhisek.jpg",
      "Abhisekh Dhamsaniya",
      "B.Tech",
      "Darshan University",
      "THUTHO"
    ],
    [
      "/stu/rahil.jpg",
      "Rahil Mavani",
      "B.Tech",
      "Darshan University",
      "BAYLO"
    ]
  ];

function Filter(){
    const [studentState, setStudentState] = useState(stu);

    const applyFilter = (ev)=>{
        setStudentState(()=>{
            return stu.filter((val)=>{
                return val[1].toLowerCase().includes(ev.target.value.toLowerCase())
            })
        })
    }

    return (
    <>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              id="search"
              onChange = {applyFilter}
            />
          </form>

       {
       studentState.map((val) => {
            return(
                <StudentCard
                url={val[0]}
                name={val[1]}
                degree={val[2]}
                clg={val[3]}
                city={val[4]}
              />
            )
        })
    }
    </>
)
}
export default Filter;
