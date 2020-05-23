import Badge from 'react-bootstrap/Badge';

export const OrderBadge = ({status}) => {
    if(status === "sent") {
        return (
            <Badge pill variant="warning">Versendet</Badge>
        )
    } else if(status === "delivered") {
        return (
            <Badge pill variant="success">Zugestellt</Badge>
        )
    }
    return (
        <Badge pill variant="danger">Offen</Badge>
    )
}
