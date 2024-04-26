import { useMemo } from "react";

// timeを受け取り、指定されたタイムゾーンで日時を変換およびフォーマットするカスタムフック
export default function useConvertTimeZone(time: Date, timeZone: string, formatOptions?: Intl.DateTimeFormatOptions): string {
  const convertedTime = useMemo(() => {
    // フォーマットオプションが指定されていない場合のデフォルト設定
    const defaultFormatOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      ...formatOptions, // ユーザー指定のオプションをマージ
    };

    // 指定されたタイムゾーンで日時を変換
    return new Date(time).toLocaleString(undefined, { timeZone, ...defaultFormatOptions });
  }, [time, timeZone, formatOptions]);

  return convertedTime;
}
