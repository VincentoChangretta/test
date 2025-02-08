export const deleteFromID = async (url: string, id: number) => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Ошибка при удалении: ${res.statusText}`);
    }
  } catch (e) {
    console.error("Ошибка:", e);
  }
};
