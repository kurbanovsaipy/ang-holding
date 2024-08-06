export default function ContactsItem ({children, title}) {
    return (
        <div className="contacts_item">
            <h3>{title}</h3>
            {children}
        </div>
    )
}