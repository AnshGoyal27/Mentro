import {TiStarHalf, TiStar} from 'react-icons/ti'
import '../css/profileInfo.css'

export const ProfileInfo = ({presentProfile})=>{
    let arr=[]
    for(let i=1;i<=presentProfile.Stars;i++){
        arr.push(i)
    }
    if(presentProfile.Stars-Math.floor(presentProfile.Stars)!==0){
        arr.push(0.5);
    }
    return(
        <div className="text-left p-10" >
            <h1 className="text-7xl" >{presentProfile.Stars}</h1>
            <br/>
            <div className='flex items-stretch' >
                {/* <AiFillStar style={{'scale':'200%','margin':'0% 0.75%'}} />
                <AiFillStar style={{'scale':'200%','margin':'0% 0.75%'}} />
                <AiFillStar style={{'scale':'200%','margin':'0% 0.75%'}} />
                <AiFillStar style={{'scale':'200%','margin':'0% 0.75%'}} />
                <AiFillStar style={{'scale':'200%','margin':'0% 0.75%'}} /> */}
                {
                    arr.map((e,i)=>{
                        if(e<1){
                            return(
                                <TiStarHalf key={i} style={{'scale':'200%','margin':'0% 0.75%'}} />
                            )
                        }
                        else{
                            return(
                                <TiStar key={i} style={{'scale':'200%','margin':'0% 0.75%'}} />
                            )
                        }
                    })
                }
            </div>
            <br/>
            <h1 className='text-7xl' >{presentProfile.Name}</h1>
            <h1 className='text-4xl'>{presentProfile.Position}</h1>
            <br/>
            <p>{presentProfile.Details}</p>
            <br/>
            <button id='bookSession' className='text-white font-bold text-2xl py-6 px-8 rounded shadow-7xl '>Book a Session</button>
        </div>
    )
}