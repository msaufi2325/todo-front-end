import { Chip } from '@nextui-org/react';

export default function PriorityList() {
  return (
    <div>
      <h2 style={{ color: 'blue' }}>Priority</h2>
      <hr style={{ border: '1px solid black' }} className="mt-1 mb-3" />
      <Chip color="default" variant="shadow" className="mt-1 mb-1">
        Low
      </Chip>
      <br />
      <Chip color="warning" variant="shadow" className="mt-1 mb-1">
        Medium
      </Chip>
      <br />
      <Chip color="danger" variant="shadow" className="mt-1 mb-1">
        High
      </Chip>
    </div>
  )
}
