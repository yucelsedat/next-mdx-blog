import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className='w-full'>
      <Image 
        src={'/images/profil-sea.png'}
        width={200}
        height={200}
        alt='Sedat Yucel'
        priority={true} //sayfa yüklenir yüklenmez resim gözüksün 
        className='aspect-[1/1] object-cover object-top border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
      />
    </section>
  )
}
