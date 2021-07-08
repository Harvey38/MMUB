1

// import React, { useState } from 'react'

// function React_Test() {
//     const [profile, setProfile] = useState({
//         name: 'Backbencher',
//         age: 23
//     })
//     const onNameChange = (e) => {
//         setProfile({...profile,name:e.target.value})
//     }
//     const onAgeChange =(e)=>{
//         setProfile({...profile,age:e.target.value})
//     }
//     return (
//         <div>
//             <div>
//                 <form>
//                     <input
//                         type="text"
//                         value={profile.name}
//                         onChange={onNameChange}
//                     />
//                     <input
//                         type="text"
//                         value={profile.age}
//                         onChange={onAgeChange}
//                     />
//                     <h2>
//                         Name: {profile.name}, Age: {profile.age}
//                     </h2>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default React_Test

// 2
// function Banner(){
//     const [count,setCount] =useState(0);
//     const updateState = ()=>{
//         setCount(count+1)
//     }
//     useEffect(() => {
//         console.log('Boom');
//     })
// }

// 4
// useEffect(() => {
//     console.log("Count is updated");
//     },[count]);

// 9
// useEffect(() => {
//     window.addEventListener('mousemove',handleMousePosition)
//     return () => {
//         window.removeEventListener('mousemove',handleMousePosition)
//     }
// }, [])

// 10
// import React, { useContext } from 'react'
// function Test2() {
//   
//     let name = useContext(NameContext);
//     let age = useContext(AgeContext)
//  return (
//  <div>
//      {name} {age}
//  </div>
//  )
// }
// export default Test2
