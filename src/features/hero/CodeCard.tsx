
import type { CSSProperties, ReactNode } from "react";
import { profile } from "@/data/profile";

const K = ({ children }: { children: ReactNode }) => (
  <span className="text-[#ff9f7a]">{children}</span>
);

const S = ({ children }: { children: ReactNode }) => (
  <span className="text-[#8fe3b5]">{children}</span>
);

function Line({ i, children }: { i: number; children: ReactNode }) {
  return (
    <span className="code-line" style={{ "--i": i } as CSSProperties}>
      {children}
    </span>
  );
}

export function CodeCard() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-110 overflow-hidden rounded-[14px] border border-line bg-code text-[#dbe4ff] shadow-card"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3.5 py-2.5 font-mono text-xs text-[#8493b5]">
        <i className="size-2.5 rounded-full bg-[#3a4766]" />
        <i className="size-2.5 rounded-full bg-[#3a4766]" />
        <i className="size-2.5 rounded-full bg-[#3a4766]" />
        <span className="ml-2">developer.ts</span>
      </div>

      <pre className="m-0 overflow-x-auto px-5 pt-4.5 pb-5 font-mono text-[clamp(0.68rem,2.4vw,0.82rem)] leading-[1.75]">
        <Line i={0}>
          <K>const</K> developer = {"{"}
        </Line>
        <Line i={1}>
          {"  "}name: <S>"{profile.name}"</S>,
        </Line>
        <Line i={2}>
          {"  "}role: <S>"FullStack Developer"</S>,
        </Line>
        <Line i={3}>
          {"  "}backend: [<S>"NestJS"</S>, <S>".NET"</S>, <S>"Node.js"</S>],
        </Line>
        <Line i={4}>
          {"  "}frontend: [<S>"React"</S>, <S>"JavaScript"</S>],
        </Line>
        <Line i={5}>
          {"  "}databases: [<S>"PostgreSQL"</S>, <S>"MongoDB"</S>],
        </Line>
        <Line i={6}>
          {"  "}integrations: [<S>"SAP"</S>, <S>"REST APIs"</S>],
        </Line>
        <Line i={7}>
          {"  "}cloud: [<S>"AWS EC2"</S>, <S>"S3"</S>],
        </Line>
        <Line i={8}>
          {"  "}tools: [<S>"Docker"</S>, <S>"Jest"</S>],
        </Line>
        <Line i={9}>
          {"  "}payments: [<S>"Razorpay"</S>, <S>"Stripe"</S>],
        </Line>
        <Line i={10}>
          {"  "}openToWork: <K>true</K>,
        </Line>
        <Line i={11}>{"};"}</Line>
      </pre>
    </div>
  );
}
