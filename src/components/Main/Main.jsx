import React from 'react'
import "./Main.css"
import { useContext } from 'react'
import { Context } from '../../context/Context'
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (

      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" style={{width:"40px",height:"40px"}} />
        </div>
        <div className="main-container">
            {!showResult
            ?<><div className="greet">
            <p><span>Hello, Sakshi.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-compass-icon-png-image_925434.jpg" alt="" style={{width:"35px",height:"35px"}} />
            </div>
            <div className="card">
                <p>Briefly summarize this concept : urban planning</p>
                <img src="https://png.pngtree.com/png-vector/20220313/ourmid/pngtree-light-bulb-icon-png-image_4490900.png" alt=""  style={{width:"35px",height:"35px"}}/>
            </div>
            <div className="card">
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnuWdFuHKJ0U5588qsODTKiDv_2tjRrmRWw&s" alt="" style={{width:"35px",height:"35px"}} />
            </div><div className="card">
                <p>Improve the readbility of the following code</p>
                <img src="https://static.thenounproject.com/png/70816-200.png" alt=""  style={{width:"35px",height:"35px"}}/>
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" style={{width:"40px",height:"40px"}} />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="" style={{width:"40px",height:"40px"}}/>
                {loading
                ?
                <div className='loader'>
                    <hr />
                    <hr />
                    <hr />

                </div>
                :
                 <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
             
            </div>
        </div>
        }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input}type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5Fui4mhbVdmJ8i_Ad_lawZ5qkg1nGXwrcA&s" alt=""  style={{width:"24px",height:"24px"}}/>
                        <img src="https://cdn-icons-png.flaticon.com/512/1082/1082810.png" alt="" style={{width:"24px",height:"24px"}} />
                        <img onClick = {()=>onSent()} src="https://t3.ftcdn.net/jpg/02/93/72/48/360_F_293724835_LqDz77Sl5zGWOU5eEcPYMM99qeBiiaiu.jpg" alt=""  style={{width:"24px",height:"24px"}}/>
                    </div>
                    
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info,including about people,so double check its response
                </p>
            </div>
        </div>
      </div>

  )
}

export default Main
