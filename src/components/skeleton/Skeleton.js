import style from './Skeleton.module.css';

export function Skeleton() {
    const SkeletonItem = () => (
        <div className={style.card}>
            <div className={style.img}></div>
            <div className={style.title}></div>
            <div className={style.text}></div>
            <div className={style.footer}>
                <div className={style.price}></div>
            </div>
        </div>
    );

    const skeletonArray = Array(8).fill(null);

    return (
        <>
            {skeletonArray.map((_, index) => (
                <SkeletonItem key={index} />
            ))}
        </>
    );
};