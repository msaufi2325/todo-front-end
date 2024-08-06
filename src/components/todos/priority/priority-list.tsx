import { Chip } from '@nextui-org/react';

export default function PriorityList() {
  return (
    <div>
      <Chip color="default" variant="shadow">
        Low
      </Chip>
      <br />
      <Chip color="warning" variant="shadow">
        Medium
      </Chip>
      <br />
      <Chip color="danger" variant="shadow">
        High
      </Chip>
    </div>
  )
}
