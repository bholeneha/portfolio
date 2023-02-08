import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Skills() {
    return (
        <section className='Skills' id='Skills'>
            <h1>Skills</h1>
            <div>
                <FontAwesomeIcon icon="fa-brands fa-html5" />
            </div>
        </section>
    )
}