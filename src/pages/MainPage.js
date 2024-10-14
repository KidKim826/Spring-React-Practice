import React from 'react'
import BasicLayout from '../layouts/BasicLayout'

function MainPage() {
  return (
    // Link >> 전체를 다 가져오지 않아, 리액트 코드 스플리팅 
    <BasicLayout>
      <div className={'text-3xl'}>
        Main Page
      </div>
    </BasicLayout>
  )
}

export default MainPage

