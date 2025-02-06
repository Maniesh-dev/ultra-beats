"use client"

import { Music2Icon } from 'lucide-react'
import React, { useRef, useState } from 'react'
// import song from '../../public/Pure-Light.mp3'

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);
  const handleAudio = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }
  return (
    <div className='cursor-pointer flex items-center gap-2' onClick={()=> {setPlaying(!playing),handleAudio()}}>
      <Music2Icon className={`w-4 h-4 ${!playing && 'animate-spin'}`} /> Music Player
      <audio id='audio' ref={audioRef} className='hidden' loop autoPlay>
        <source src='/Pure-Light.mp3' type="audio/mpeg"/>
      </audio>
    </div>
  )
}

export default MusicPlayer