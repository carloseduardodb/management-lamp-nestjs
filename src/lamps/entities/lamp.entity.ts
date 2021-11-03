import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Lamp {
    @PrimaryColumn()
    id: string;

    @Column()
    typeOfLight: string;
    
    @Column('double precision')
    powerInWatts: number;
    
    @Column()
    brand: string;
    
    @Column()
    color: string;
    
    @Column()
    manufacturer: string;
}
