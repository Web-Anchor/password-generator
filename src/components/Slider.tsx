import React, { useEffect, useState } from 'react'

const MIN_VALUE = 6
const MAX_VALUE = 60

type SliderProps = {
  name: string
  label?: string
  id?: string
  minValue?: number
}

export default function Slider(props: SliderProps) {
  const [value, setValue] = useState(props?.minValue ?? MIN_VALUE)
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
    <div className="w-full">
      <div className="relative" id="slider-container">
        {props.label && (
          <label
            htmlFor={props.id ?? props.name}
            className="font-medium text-gray-100"
          >
            {props.label}
          </label>
        )}
        <input
          type="range"
          id={props.id ?? props.name}
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={value}
          onChange={handleChange}
          className="slider-thumb w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer"
          name={props.name}
        />
        {isDragging && (
          <div
            className="absolute -top-6 w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-slider"
            style={{
              left: `calc(${((value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100}% - ${value / 2}px)`,
            }}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  )
}
