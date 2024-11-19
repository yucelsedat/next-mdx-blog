type Props = {
  id: string
}

export default function Video({ id } : Props) {
  
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe 
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}