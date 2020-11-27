import React from 'react'



const Profile = () => {
  
  return (
      <div className='profile-wrapper'>

      <div className='profile'>
          <img className='profile-pic' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png`}/>
        <div className='profile-name-plate'>
          <span className='profile-name'>hortense</span>
          <span className='profile-sign'>feeling fabulous</span>
        </div>
        </div>
    </div>
  )
}


export default Profile
