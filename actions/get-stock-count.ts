import prismadb from "@/lib/prismdb";

export const getStockCount = async ( storeId: string ) => {
    const stockCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false,
        },
    });

    return stockCount;
};
