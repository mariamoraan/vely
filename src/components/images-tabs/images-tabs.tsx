import { useState } from "react"
import './images-tabs.css'

const tabs = [
    {id: 1, title: "Gestión de clases", src: "https://framerusercontent.com/images/VCocEAgrOxNR1CBN6486m4I5FVk.webp"},
    {id: 2, title: "Inscripciones online", src: "https://framerusercontent.com/images/mUtXegwmVY8HXVhMRklcahOPo.webp"},
    {id: 3, title: "Calendario inteligente", src: "https://framerusercontent.com/images/YAn1s0cxusiJLOw7OWyVHqMboE.webp"},
    {id: 4, title: "Comunicaciones rápidas", src: "https://framerusercontent.com/images/Kmz1nmlLnyQDPDaVTeoE686BII.webp"},
]

export const ImagesTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)
    return (
        <div className="images-tabs">
            <div className="images-tabs__buttons">
                {tabs.map(tab => (
                    <button className={`images-tabs__buttons__button ${activeTab === tab.id ? 'active' : ''}`} key={tab.id} onClick={() => setActiveTab(tab.id)}>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="images-tabs__content">
                <img key={activeTab} className="images-tabs__content__image " src={tabs.find(tab => tab.id === activeTab)?.src} alt={tabs.find(tab => tab.id === activeTab)?.title || "Tab image"} />
            </div>
        </div>
    )
}