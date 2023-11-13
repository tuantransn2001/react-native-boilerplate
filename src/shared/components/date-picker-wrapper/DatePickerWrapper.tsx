import * as React from "react";
import createStyles from "./DatePickerWrapper.style";
import { Datepicker, Layout } from "@ui-kitten/components";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { SetState } from "shared/type/common";

interface DatePickerWrapperProps {
  title?: string;
  date: Date;
  setDate: SetState<Date>;
}

const DatePickerWrapper = ({
  title,
  date,
  setDate,
}: DatePickerWrapperProps) => {
  const styles = React.useMemo(() => createStyles(), []);
  return (
    <Layout style={styles.container} level="1">
      <TextWrapper h5 bold>{`${
        title ? title : "Selected date"
      }: ${date.toLocaleDateString()}`}</TextWrapper>
      <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
    </Layout>
  );
};
export default DatePickerWrapper;
