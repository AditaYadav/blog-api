import { IsOptional } from "class-validator";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "blog" })
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "heading", nullable: false })
    heading: string;

    @Column({ name: "content", nullable: true })
    content: string;

    @Column({ name: "images", nullable: true })
    images: string;

    @Column({ name: "user_id", nullable: false })
    userId: number;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    updatedAt: Date;
}
