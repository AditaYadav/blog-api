import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "comment" })
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "blog_id", nullable: false })
    blogId: string;

    @Column({ name: "user_id", nullable: false })
    userId: string;

    @Column({ name: "comment", nullable: true })
    comment: string;

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
