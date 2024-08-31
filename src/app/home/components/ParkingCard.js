import Image from "next/image";
import Link from "next/link";
import './../../../components/card/css/card.scss';


export default function ParkingCard({el}) {
    return (
        <div className="card">
            <Image
                src={el?.image || '/images/no-image.webp'}
                alt=""
                width={0} 
                height={0} 
                style={{ width: '100%', height: '100%' }} 
                priority={100} placeholder="blur" 
                unoptimized={true} 
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z"
                className="back_image"
            />
            <Link href={``} className='cover_link'></Link>
            <div className="project_name">{el?.projectName}</div>
            <Link href={``} className='title'>{el?.title || 'Название'}</Link>
            
            {el?.houseBadges?.length 
            ?<div className="labels parking">
                {el.houseBadges.map((e, i) => (
                    <div className="labels_item" key={i} style={{background: e.color}}>
                        {e.label}
                    </div>
                ))}
            </div>:<></>}

            <div className="parking_settings">
                <div className="parking_settings_item">
                    <div className="image car">

                        <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                            <g className="icon_car"> <path d="M32 29.6256H36V32.6256C36 33.1776 35.552 33.6256 35 33.6256H33C32.448 33.6256 32 33.1776 32 32.6256V29.6256Z" className="stroke" stroke-width="2"/> <path d="M10 29.6256H14V32.6256C14 33.1776 13.552 33.6256 13 33.6256H11C10.448 33.6256 10 33.1776 10 32.6256V29.6256Z" className="stroke" stroke-width="2"/> <path d="M14 19.6256H32C34.209 19.6256 36 21.4166 36 23.6256V28.6256C36 29.1776 35.552 29.6256 35 29.6256H11C10.448 29.6256 10 29.1776 10 28.6256V23.6256C10 21.4166 11.791 19.6256 14 19.6256Z" className="stroke" stroke-width="2"/> <path d="M32 23.6256C32.552 23.6256 33 24.0736 33 24.6256C33 25.1776 32.552 25.6256 32 25.6256C31.448 25.6256 31 25.1776 31 24.6256C31 24.0736 31.448 23.6256 32 23.6256Z" className="fill"/> <path d="M14 23.6256C14.552 23.6256 15 24.0736 15 24.6256C15 25.1776 14.552 25.6256 14 25.6256C13.448 25.6256 13 25.1776 13 24.6256C13 24.0736 13.448 23.6256 14 23.6256Z" className="fill"/> <path d="M15.693 11.6256H30.307C30.724 11.6256 31.097 11.8846 31.243 12.2746L34 19.6256H12L14.757 12.2746C14.903 11.8846 15.276 11.6256 15.693 11.6256Z" className="stroke" stroke-width="2"/> <path d="M9 16.6256H12V18.6256H9V16.6256Z" className="fill"/> <path d="M34 16.6256H37V18.6256H34V16.6256Z" className="fill"/> <path d="M17 24.6256H29" className="stroke" stroke-width="2"/> </g>

                        </svg>

                    </div>
                    <div className="description">
                        <h5>Машиномест</h5>
                        <p>{el.propertyCount}</p>
                    </div>
                </div>
                <div className="parking_settings_item">
                    <div className="image floors">
                    
                        <svg viewBox="-32 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.282,324l-59.657,29.789c-3.5,1.751 -5.979,3.647 -7.437,5.689c-1.459,2.043 -2.188,4.814 -2.188,8.315c0,3.501 0.729,6.273 2.188,8.315c1.458,2.042 3.937,3.938 7.437,5.689l185.792,92.774c7.583,3.695 17.111,5.349 28.583,4.96c11.472,0.389 21,-1.265 28.583,-4.96l185.792,-92.774c3.5,-1.751 5.979,-3.647 7.437,-5.689c1.459,-2.042 2.188,-4.814 2.188,-8.315c0,-3.501 -0.729,-6.272 -2.188,-8.315c-1.458,-2.042 -3.937,-3.938 -7.437,-5.689l-59.657,-29.789l-35.814,17.884l51.886,25.909l-156.31,78.052c-1.562,0.738 -5.496,1.972 -13.396,1.704l-1.084,-0.037l-1.084,0.037c-7.9,0.268 -11.834,-0.966 -13.396,-1.704l-156.31,-78.052l51.886,-25.909l-35.814,-17.884Zm-45.504,58.494c0,0 0.007,-0.004 0.02,-0.011l-0.015,0.008l-0.005,0.003Zm-14.153,-140.29l60.072,-29.997l35.814,17.884l-52.301,26.116l156.31,78.053c1.562,0.737 5.496,1.971 13.396,1.703l1.084,-0.037l1.084,0.037c7.9,0.268 11.834,-0.966 13.396,-1.703l156.31,-78.053l-52.301,-26.116l35.815,-17.884l60.071,29.997c3.5,1.75 5.979,3.646 7.437,5.689c1.459,2.042 2.188,4.813 2.188,8.314c0,3.501 -0.729,6.273 -2.188,8.315c-1.458,2.042 -3.937,3.938 -7.437,5.689l-185.792,92.774c-7.583,3.695 -17.111,5.349 -28.583,4.96c-11.472,0.389 -21,-1.265 -28.583,-4.96l-185.792,-92.774c-3.5,-1.751 -5.979,-3.647 -7.438,-5.689c-1.458,-2.042 -2.187,-4.814 -2.187,-8.315c0,-3.501 0.729,-6.272 2.187,-8.314c1.459,-2.043 3.938,-3.939 7.438,-5.689Zm185.792,-205.189l-185.792,92.774c-3.5,1.751 -5.979,3.647 -7.438,5.689c-1.458,2.043 -2.187,4.814 -2.187,8.315c0,3.501 0.729,6.272 2.187,8.315c1.459,2.042 3.938,3.938 7.438,5.689l185.792,92.774c7.583,3.695 17.111,5.348 28.583,4.959c11.472,0.389 21,-1.264 28.583,-4.959l185.792,-92.774c3.5,-1.751 5.979,-3.647 7.437,-5.689c1.459,-2.043 2.188,-4.814 2.188,-8.315c0,-3.501 -0.729,-6.272 -2.188,-8.315c-1.458,-2.042 -3.937,-3.938 -7.437,-5.689l-185.792,-92.774c-7.583,-3.695 -17.111,-5.348 -28.583,-4.959c-11.472,-0.389 -21,1.264 -28.583,4.959Zm-171.638,204.492l0.001,0.001l0.018,0.01c-0.013,-0.008 -0.019,-0.011 -0.019,-0.011Zm200.221,-177.433l1.084,-0.037c7.899,-0.268 11.834,0.966 13.396,1.704l156.31,78.052l-156.31,78.052c-1.562,0.738 -5.496,1.972 -13.396,1.704l-1.084,-0.037l-1.084,0.037c-7.9,0.268 -11.834,-0.966 -13.396,-1.704l-156.31,-78.052l156.31,-78.052c1.562,-0.738 5.497,-1.972 13.396,-1.704l1.084,0.037Z"></path>
                        </svg>

                    </div>
                    <div className="description">
                        <h5>Этажей</h5>
                        <p>{el.maxFloor}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}