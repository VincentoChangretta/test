export const updateOnServer = async (url: string, id: number, data: object) => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Ошибка при обновлении: ${res.statusText}`);
    }
  } catch (e) {
    console.error("Ошибка:", e);
  }
};
