import { useState } from 'react';
import './new-lead-form.css';
import type { Lead } from '../../domain/lead';
import { postLead } from '../../services/leads/post-lead';

export const NewLeadForm = () => {
    const [lead, setLead] = useState<Lead>({
        email: '',
        name: ''
    })
    const [isSubmit, setIsSubmit] = useState(false);
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmit(true);
        await postLead(lead);
    }
    if(isSubmit) {
        return (
            <div id="coming-soon" className='new-lead-section'>
                <div  className='new-lead-section__center'>
                <h1 className='new-lead-section__title'>¡ Enhorabuena {lead.name} ! </h1>
                <p className='new-lead-section__description'>Has dado el primer paso para impulsar tu negocio al unirte a la comunidad de Vely.</p>
                <p  className='new-lead-section__description'>Te mantendremos informado sobre el lanzamiento.</p>   
                </div>
            </div>
        )
    }
    return (
        <div id="coming-soon" className='new-lead-section'>
            <div  className='new-lead-section__message'>
                <h1 className='new-lead-section__title'>¡Vely está en camino! </h1>
                <p className='new-lead-section__description'>Estamos creando algo que cambiará la manera en que organizas tus clases.<br />No querrás perderte su lanzamiento: deja tu email y sé de los primeros en descubrirlo.</p>
             </div>
             <form id="coming-soon" className="new-lead-form" onSubmit={onSubmit}>
                <div className="new-lead-form__field">
                    <label className="new-lead-form__label" htmlFor="name">Nombre</label>
                    <input className="new-lead-form__input" id="name" type="text" name="name" required autoComplete="name" value={lead.name} onChange={e => setLead({ ...lead, name: e.target.value })} />
                </div>
                <div className="new-lead-form__field">
                    <label className="new-lead-form__label" htmlFor="email">Email</label>
                    <input className="new-lead-form__input" id="email" type="email" name="email" required autoComplete="email" value={lead.email} onChange={e => setLead({ ...lead, email: e.target.value })} />
                </div>
                <button disabled={!lead.name || !lead.email} type="submit" className="new-lead-form__submit">Avisame cuando salga</button>
            </form>
        </div>
    )
}
