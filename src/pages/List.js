import React, { useState,useEffect } from 'react';

export default function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}