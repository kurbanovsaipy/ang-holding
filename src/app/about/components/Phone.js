

export default function Phone({phone}) {
    return <a href={`tel:${(phone)?.replace(/\D/g, '')}`}>{phone}</a>
}