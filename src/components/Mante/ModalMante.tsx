import React from 'react'


const ModalMante = ({ children, estado, cambiarEstado, tituloModal = 'Reporte' }: { children: React.ReactNode, estado: any, cambiarEstado: any, tituloModal?: string }) => {
  return (
    <>
    {estado &&
      <div className='FonModen'>
        <section className='ContenerModal'>
          <div className='TituModal'>
            <h2 className='textiModel'>{tituloModal}</h2>
          </div>
          {estado &&
            <div onClick={() => cambiarEstado(false)} className='butCeModal'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg centerClose" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            }
          {children}
        </section>
      </div>
    } 
    </>
  )
}

export default ModalMante