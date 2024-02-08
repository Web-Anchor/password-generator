import React, { useEffect, useState } from 'react'

const MIN_VALUE = 6
const MAX_VALUE = 36

export default function Slider() {
  const [value, setValue] = useState(MIN_VALUE)
  const [isDragging, setIsDragging] = useState(false)

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseDown = () => {
      setIsDragging(true)
    }

    const sliderContainer = document.getElementById('slider-container')
    sliderContainer?.addEventListener('mousedown', handleMouseDown)
    sliderContainer?.addEventListener('mouseup', () => {
      setTimeout(() => {
        handleMouseUp()
      }, 1000)
    })

    return () => {
      sliderContainer?.removeEventListener('mousedown', handleMouseDown)
      sliderContainer?.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className="w-full py-6">
      <div className="relative" id="slider-container">
        <input
          type="range"
          min={8}
          max={36}
          value={value}
          onChange={handleChange}
          className="slider-thumb w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundSize: `${((value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100}% 100%`,
          }}
          name="slider-thumb"
        />
        {isDragging && (
          <div
            className="absolute -top-11 w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-slider"
            style={{
              left: `calc(${((value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100}% - 2.5rem)`,
            }}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  )
}
