// eslint-disable-next-line no-unused-vars
import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Full Stack Development</h3>

        <div className="skills__box">
            
            {/* GROUP 1 */}
            <div className="skills__group">

                <div className="skills__data">
                    <i className='bx bxl-html5'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-css3'></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-javascript'></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-react'></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-tailwind-css'></i>
                    <div>
                        <h3 className="skills__name">Tailwind CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>

            {/* GROUP 2 */}
            <div className="skills__group">

                <div className="skills__data">
                    <i className='bx bxl-nodejs'></i>
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-php'></i>
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-code-alt'></i>
                    <div>
                        <h3 className="skills__name">Laravel</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxs-data'></i>
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Frontend