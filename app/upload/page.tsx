import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import React from 'react'

/*
  * This page is the upload page for users to upload files.
  * It uses a dynamic import for the UploadCard component to improve performance.
  * The UploadCard component is loaded only when needed, reducing the initial load time.
 */

const UploadCard = dynamic(() => import('@/components/UploadCard'), {
  loading: () => <div className='flex h-screen w-full items-center justify-center'><Loader2 className='h-8 w-8 animate-spin text-pink-400' /></div>,
})

const upload = () => {
  
  return (
    <div className='w-full min-h-screen relative'>

        <div className="fixed inset-0 -z-50 dark:bg-sidebar">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(closest-corner at 120px 36px, rgba(255, 1, 111, 0.19), rgba(255, 1, 111, 0.08)), linear-gradient(rgb(63, 51, 69) 15%, rgb(7, 3, 9))" }}></div>
          <div className="absolute inset-0 bg-noise"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <ProtectedRoute>
          <UploadCard />
        </ProtectedRoute>
    </div>
  )
}

export default upload