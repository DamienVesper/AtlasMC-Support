import { Document, Model, Schema } from 'mongoose';

interface TicketType extends Document {
    id: number
    state: `OPEN` | `CLOSING` | `CLOSED`
}

const TicketSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    state: { type: String, required: false, default: `OPEN` }
});

const Ticket = new Model<TicketType>(`Ticket`, TicketSchema);

export default Ticket;
