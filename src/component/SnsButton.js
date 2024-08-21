import React, { useEffect, useState } from 'react'

const SnsButton = () => {
    // const snsList = ["KaKao", "Google", "Apple","Facebook"]
    const snsData = {
        1 : {
            platform:"KaKao",
            img:"https://cdn.casetify.com/img/ui/icon-account-kakao.svg",
            link:"https://kauth.kakao.com/oauth/authorize?client_id=1e100f657beca109cb46c8d2b8f0f9ec&redirect_uri=https%3A%2F%2Fwww.casetify.com%2Fcontrollers%2FAuthentication.php&response_type=code&scope=profile_nickname,profile_image,account_email,name,gender,birthday,birthyear,phone_number"
        },
        2 : {
            platform:"Google",
            img:"https://cdn.casetify.com/img/ui/icon-account-google.svg",
            link:"https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=900806904410-6m9oia41v4vn10dikb24m2dg45jpfdum.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.casetify.com%2Fcontrollers%2FAuthentication.php&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow"
        },
        3 : {
            platform:"Apple",
            img:"https://cdn.casetify.com/img/ui/icon-account-apple.svg",
            link:"https://appleid.apple.com/auth/authorize?client_id=com.casetagram.CasetagramApp.services&redirect_uri=https%3A%2F%2Fwww.casetify.com%2Fcontrollers%2FAuthentication.php&response_type=code&response_mode=form_post&scope=name%20email"
        },
        4 : {
            platform:"Facebook",
            img:"https://cdn.casetify.com/img/ui/icon-account-facebook.svg",
            link:"https://www.facebook.com/login.php?skip_api_login=1&api_key=193132047445181&kid_directed_site=0&app_id=193132047445181&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D193132047445181%26redirect_uri%3Dhttps%253A%252F%252Fwww.casetify.com%252Fcontrollers%252FAuthentication.php%26scope%3Dpublic_profile%252Cuser_photos%252Cuser_birthday%252Cemail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db757b97c-bb05-4aba-83b1-b18aa80ec472%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.casetify.com%2Fcontrollers%2FAuthentication.php%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=popup&locale=ko_KR&pl_dbl=0"
        }
    }
    const [snsList, setSnsList] = useState([]);
    const getSnsData = () =>{
        let data = Object.values(snsData)
        setSnsList(data)
    }

    console.log(snsList)

    useEffect(()=>{
        getSnsData()
    },[])

  return (
    <div>
        {snsList.map((item,index)=>(
            <div className='sns-button'>
                <img className='sns-logo' src={item.img} alt="" />
                <a href={item.link} className='sns-item' target='blank'>로그인 {item.platform}</a>
            </div>
        ))}
    </div>
  )
}

export default SnsButton