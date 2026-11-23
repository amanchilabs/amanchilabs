import './ArchitectureBlueprint.css'

export function ArchitectureBlueprint() {
  return (
    <figure className="approach-blueprint" aria-label="Conceptual local workflow with a separate optional external AI transfer">
      <div className="blueprint-header">
        <h4>Data Flow Architecture Design</h4>
        <span className="blueprint-badge">
          Studio Design Protocol
        </span>
      </div>

      <div className="blueprint-conduit-flow">
        {/* Node 1: User */}
        <div className="blueprint-node node-user">
          <strong className="node-title">You</strong>
          <span className="node-subtitle">Choose authorized facts</span>
        </div>

        {/* Wire 1 */}
        <div className="flow-wire" aria-hidden="true">&rarr;</div>

        {/* Node 2: Device */}
        <div className="blueprint-node node-device">
          <strong className="node-title">Your Device</strong>
          <span className="node-subtitle">Personal Application<br />Local Storage &amp; Processing</span>
        </div>

        {/* Wire 2 (Gated Conduit) */}
        <div className="flow-wire dashed" aria-hidden="true">&#x21E2;</div>

        {/* Node 3: External AI */}
        <div className="blueprint-node node-external">
          <strong className="node-title">External AI</strong>
          <span className="node-subtitle">User-initiated prompt only<br />Provider policies apply</span>
        </div>
      </div>

      <figcaption className="blueprint-caption">
        <p>
          <strong>Design Standard:</strong> Solid borders represent physical hardware containment on your own device. Dashed conduits represent user-initiated external transfers that occur only when you choose to use an AI integration. External providers process submitted information under their own privacy and retention policies.
        </p>
      </figcaption>
    </figure>
  )
}
